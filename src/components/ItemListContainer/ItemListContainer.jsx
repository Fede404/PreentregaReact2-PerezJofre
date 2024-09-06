import {
  Box,
  Card,
  Stack,
  Heading,
  CardBody,
  Divider,
  CardFooter,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ItemListContainer = ({ products }) => {
  return (
    <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
      {products.map((product) => (
        <Card key={product.id} maxW="sm" margin={"1rem"}>
          <CardBody>
            <Image
              src={product.thumbnail}
              alt={product.name}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{product.title}</Heading>
              <Text>{product.description}</Text>
              <Text color="red" fontSize="2xl">
                US${product.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter gap={3}>
            <Button variant="solid" colorScheme="red">
              <Link to={`/item/${product.id}`}>Ir a Detalle</Link>
            </Button>
            <Button variant="outline" colorScheme="red" isDisabled="true">
              Añadir a carrito
            </Button>
          </CardFooter>
        </Card>
      ))}
    </Box>
  );
};
