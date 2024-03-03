import { Text, Box } from "@gluestack-ui/themed";
import { useState } from "react";
import { NoData } from "./components/NoData";

export const Main = () => {
  const [gorceriesCatalog, setGroceriesCatalog] = useState<Array<string>>([]);

  if (!gorceriesCatalog.length)
    return <NoData setGroceriesCatalog={setGroceriesCatalog} />;

  return (
    <Box height="95%" width="100%" justifyContent="center" alignItems="center">
      {gorceriesCatalog.map((grocery) => (
        <Text key={grocery}>{grocery}</Text>
      ))}
    </Box>
  );
};
