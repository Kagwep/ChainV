import '@walletconnect/react-native-compat'
import React from 'react';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { useColorScheme } from '@/src/components/useColorScheme';


import { WagmiConfig } from 'wagmi'
import { mainnet, polygon, arbitrum, sepolia,goerli } from 'viem/chains'
import { createWeb3Modal, defaultWagmiConfig, Web3Modal } from '@web3modal/wagmi-react-native';


// 1. Get projectId at https://cloud.walletconnect.com
const projectId = '46bcd5449271e602ff3421c34d25ace8'

// 2. Create config
const metadata = {
  name: 'QrCode',
  description: 'QrCode',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com'
  }
}

const chains = [mainnet, polygon, arbitrum, sepolia, goerli]

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({
  projectId,
  chains,
  wagmiConfig,
  enableAnalytics: true // Optional - defaults to your Cloud configuration
})

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <WagmiConfig config={wagmiConfig}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: 'modal' }} />
          <Stack.Screen name="admin" options={{ presentation: 'modal' }} />
          <Stack.Screen name="logs" options={{ presentation: 'modal' }} />
          <Stack.Screen name="reports" options={{ presentation: 'modal', headerTitle: 'Reports'  }} />
          <Stack.Screen name="addItem" options={{ presentation: 'modal', headerTitle: 'Add Item'  }} />
          <Stack.Screen name="addRetailer" options={{ presentation: 'modal', headerTitle: 'Add Retailer'  }} />
          <Stack.Screen name="deleteItem" options={{ presentation: 'modal', headerTitle: 'Delete Item'  }} />
          <Stack.Screen name="inventory" options={{ presentation: 'modal', headerTitle: 'Inventory'  }} />
          <Stack.Screen name="sellItem" options={{ presentation: 'modal', headerTitle: 'Mark Item Sold'  }} />
          <Stack.Screen name="scanItem" options={{ presentation: 'modal', headerTitle: 'Scan Item'  }} />
        </Stack>
        <Web3Modal />
      </WagmiConfig>
    </ThemeProvider>
  );
}
