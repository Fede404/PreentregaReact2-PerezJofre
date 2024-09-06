import {
  Box,
  Flex,
  Button,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tooltip,
} from "@chakra-ui/react";
import { CartWidget, SearchWidget } from "../../components";
import logo from "../../public/logo.png";
import { IoChevronDown } from "react-icons/io5";

export const Navbar = () => {
  return (
    <>
      <Box bg={"gray.100"} px={4}>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          height={"10vh"}
        >
          <Flex direction={"row"} justifyContent={"center"}>
            <Stack
              direction={"row"}
              spacing={2}
              display={"flex"}
              alignItems={"center"}
            >
              <Tooltip label={"Ir a inicio"}>
                <Button height={"10vh"}>
                  <img src={logo} alt="Logo de Techland" width={75} />
                </Button>
              </Tooltip>
              <Menu>
                <MenuButton as={Button} rightIcon={<IoChevronDown />}>
                  Productos
                </MenuButton>
                <MenuList>
                  <MenuItem>Smartphones</MenuItem>
                  <MenuItem>Tablets</MenuItem>
                  <MenuItem>Laptops</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
          <Flex direction={"row"} justifyContent={"center"} gap={1}>
            <SearchWidget />
              <CartWidget />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
