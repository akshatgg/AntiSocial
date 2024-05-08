import { Avatar, Box, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { url } from "../../axios/imageurl";
import { CheckCheck, MessageCircleMore } from "lucide-react";
import useStore from "../../zustand/zustan";

const ConversationUser = (props) => {
  const { user } = useStore();
  console.log(props);

  return (
    <>
      <Flex direction={"column"} cursor={"pointer"}>
        <Flex
          paddingY={4}
          w={"full"}
          justifyContent={"space-between"}
          paddingX={{ base: 0, md: 8 }}
          alignItems={"center"}
        >
          {props?.props?.participants.map(
            (item, index) => (
              <Box display={"flex"} alignItems={"center"} gap={5} key={index}>
                <Avatar
                  cursor={"pointer"}
                  size={{ base: "sm", md: "sm", xl: "md" }}
                  name={props?.props?.participants[0].name}
                  src={`${url + item.profilepic}`}
                />
                <Box>
                  <Text
                    key={index}
                    fontSize={{ base: 14, md: 18 }}
                    fontWeight={"bold"}
                  >
                    {item.username}
                  </Text>
                  <Flex>
                    {props?.props?.lastMessage.sender == user._id && (
                      <Flex paddingRight={3}>
                        <CheckCheck />
                      </Flex>
                    )}
                    <Text>
                      {props?.props?.lastMessage?.text.length > 10
                        ? props?.props?.lastMessage?.text.substring(0, 10) +
                          "..."
                        : props?.props?.lastMessage?.text}
                    </Text>
                  </Flex>
                </Box>
              </Box>
            )
            // )
          )}
          <MessageCircleMore />
        </Flex>
        <Divider orientation="horizontal" w={"full"} marginY={2} />
      </Flex>
    </>
  );
};

export default ConversationUser;
