import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Diego Araujo</Text>
          <Text color="gray.300" fontSize="small">
            diego@mail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Diego Araujo"
        src="https://avatars.githubusercontent.com/u/13032730?v=4"
      />
    </Flex>
  );
}
