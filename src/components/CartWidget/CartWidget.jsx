import { Flex, Button } from "@chakra-ui/react";
import { IoCart } from "react-icons/io5";

export const CartWidget = () => {
	return (
		<Flex alignItems={"center"} justifyContent={"center"} height={"100%"}>
			<Button>
				<IoCart size={30} />
			</Button>
		</Flex>
	);
};