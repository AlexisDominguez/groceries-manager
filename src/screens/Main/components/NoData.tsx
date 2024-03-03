import {
  Card,
  Heading,
  Text,
  Box,
  Input,
  InputField,
  Button,
  ButtonText,
} from "@gluestack-ui/themed";
import { useState } from "react";

interface INoDataProps {
  setGroceriesCatalog: React.Dispatch<React.SetStateAction<string[]>>;
}

export const NoData = (props: INoDataProps) => {
  const { setGroceriesCatalog } = props;

  const [newGrocery, setNewGrocery] = useState("");

  const handleNewGrocerySubmit = () => {
    console.log("Se ejecuta");
    setGroceriesCatalog((prev) => [...prev, newGrocery]);
  };

  return (
    <Box height="95%" width="100%" justifyContent="center" alignItems="center">
      <Card size="lg" variant="elevated" m="$3" width="90%">
        <Heading mb="$1" size="md" textAlign="center">
          Quick Start
        </Heading>
        <Text size="md" mb="$3" textAlign="center">
          Start by adding your first grocery item:
        </Text>
        <Input variant="rounded" size="md" isInvalid={false} isReadOnly={false}>
          <InputField
            placeholder="Enter text here"
            onChangeText={(value) => setNewGrocery(value)}
            value={newGrocery}
          />
        </Input>
        <Box justifyContent="center" alignItems="center" mt="$3">
          <Button
            size="md"
            variant="solid"
            action="primary"
            isDisabled={!newGrocery}
            isFocusVisible={false}
            width={100}
            onPress={() => handleNewGrocerySubmit()}
          >
            <ButtonText>Confirm</ButtonText>
          </Button>
        </Box>
      </Card>
    </Box>
  );
};
