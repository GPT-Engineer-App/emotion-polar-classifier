import { Box, VStack, Text, Input, Button, Textarea, Heading, Divider, useToast } from "@chakra-ui/react";
import { FaRegSmile, FaRegFrown, FaRegMeh, FaSearch } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleAnalyzeSentiment = () => {
    toast({
      title: "情感分析完成",
      description: "文本的情感倾向为：积极",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleAnalyzeIntensity = () => {
    toast({
      title: "情感强度分析完成",
      description: "文本的情感强度为：强烈积极",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleAnalyzeHierarchy = () => {
    toast({
      title: "层次化情感分析完成",
      description: "文章整体情感倾向为：积极",
      status: "warning",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleExtractOpinion = () => {
    toast({
      title: "观点抽取完成",
      description: "抽取的观点情感倾向为：消极",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <VStack spacing={8} p={5}>
      <Heading as="h1" size="xl">
        情感分析工具
      </Heading>
      <Divider />
      <Box w="full">
        <Heading as="h2" size="lg">
          情感极性分类
        </Heading>
        <Textarea placeholder="输入文本进行情感极性分类" />
        <Button leftIcon={<FaSearch />} colorScheme="blue" onClick={handleAnalyzeSentiment}>
          分析情感极性
        </Button>
      </Box>
      <Box w="full">
        <Heading as="h2" size="lg">
          情感强度判断
        </Heading>
        <Textarea placeholder="输入文本进行情感强度判断" />
        <Button leftIcon={<FaRegSmile />} colorScheme="green" onClick={handleAnalyzeIntensity}>
          分析情感强度
        </Button>
      </Box>
      <Box w="full">
        <Heading as="h2" size="lg">
          层次化情感分析
        </Heading>
        <Textarea placeholder="输入文本进行层次化情感分析" />
        <Button leftIcon={<FaRegMeh />} colorScheme="orange" onClick={handleAnalyzeHierarchy}>
          分析层次化情感
        </Button>
      </Box>
      <Box w="full">
        <Heading as="h2" size="lg">
          观点抽取
        </Heading>
        <Textarea placeholder="输入文本进行观点抽取" />
        <Button leftIcon={<FaRegFrown />} colorScheme="red" onClick={handleExtractOpinion}>
          抽取观点
        </Button>
      </Box>
    </VStack>
  );
};

export default Index;
