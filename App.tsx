import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { GluestackUIProvider, Box, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <GluestackUIProvider config={config}>
          <Box width="100%" justifyContent="center" alignItems="center">
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar translucent />
          </Box>
        </GluestackUIProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
