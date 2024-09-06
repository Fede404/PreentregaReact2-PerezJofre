import { Input, Flex, Button } from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";

export const SearchWidget = () => {
	return (
		<Flex alignItems={"center"} gap={1}>
			<Input placeholder="Buscar producto..." backgroundColor={"#fff"} />
			<Button>
				<IoSearch size={30} />
			</Button>
		</Flex>
	);
};
