import { Box, Container, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getFeeds, isLoggedIn } from "../../axios/request";
import AllPost from "../../components/Post/AllPost";

const HomePage = () => {
  const [feeds, setFeeds] = useState();

  const isLog = async () => {
    const { res, err } = await isLoggedIn();
    console.log(res);
    if (err) {
      navigate("/");
    }
  };

  useEffect(() => {
    isLog();
  }, []);

  const feed = async () => {
    const { res, err } = await getFeeds();
    console.log(res.data);
    if (res.status == 200) {
      setFeeds(res.data);
    }
  };

  useEffect(() => {
    feed();
  }, []);

  return (
    <>
      <Container maxW={"900px"} minH={"100vh"}>
        <Flex
          justifyContent={"center"}
          paddingY={{ base: 3, md: 5 }}
          // position={"fixed"}
          bg={"black"}
        >
          {/* <Box> */}
          <Image
            src="/src/assets/Logo.png"
            alt=""
            w={{ sm: "10%", md: "25%" }}
          />
          {/* </Box> */}
          {/* <Text fontSize={32}>Anti-Social</Text> */}
        </Flex>
        <Divider></Divider>
        <Flex direction={"column"} paddingBottom={12}>
          {feeds?.length == 0 && (
            <>
              <Flex
                w={"full"}
                justifyContent={"center"}
                alignItems={"center"}
                h={"75vh"}
              >
                <Text fontSize={"2xl"} fontWeight={"bold"}>
                  {" "}
                  Follow Users to see their posts
                </Text>
              </Flex>
            </>
          )}
          {feeds?.map((item, index) => (
            <Box key={index}>
              <AllPost data={item} fun={feed} />
            </Box>
          ))}
        </Flex>
      </Container>
    </>
  );
};

export default HomePage;
