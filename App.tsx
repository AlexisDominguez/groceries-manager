import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "./src/config/gluestack-ui.config";

import { Main } from "./src/screens/Main/Main";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <GluestackUIProvider config={config}>
          <Main />
          <StatusBar translucent />
        </GluestackUIProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
