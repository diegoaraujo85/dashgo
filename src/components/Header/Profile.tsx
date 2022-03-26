import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Diego Araujo</Text>
        <Text color="gray.300" fontSize="small">
          diego@mail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Diego Araujo"
        src="https://avatars.githubusercontent.com/u/13032730?v=4"
      />
    </Flex>
  );
}
