import { useState } from "react";
import { Box, Button, Container, Flex, Grid, Image, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

// Mock data for tarot layouts
const layouts = [
  { id: 1, name: "Celtic Cross", cards: 10, image: "https://images.unsplash.com/photo-1541346183200-e8e117d945dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDZWx0aWMlMjBDcm9zcyUyMHRhcm90JTIwbGF5b3V0fGVufDB8fHx8MTcxNTMxOTY1MHww&ixlib=rb-4.0.3&q=80&w=1080", positions: ["center", "left", "right", "top", "bottom", "top left", "top right", "bottom left", "bottom right", "center bottom"] },
  { id: 2, name: "Three Card Spread", cards: 3, image: "https://images.unsplash.com/photo-1568821137008-6a947a8decfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxUaHJlZSUyMENhcmQlMjB0YXJvdCUyMHNwcmVhZHxlbnwwfHx8fDE3MTUzMTk2NTB8MA&ixlib=rb-4.0.3&q=80&w=1080", positions: ["left", "center", "right"] },
  { id: 3, name: "Five Card Spread", cards: 5, image: "https://images.unsplash.com/photo-1494797262163-102fae527c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxGaXZlJTIwQ2FyZCUyMHRhcm90JTIwc3ByZWFkfGVufDB8fHx8MTcxNTMxOTY1MXww&ixlib=rb-4.0.3&q=80&w=1080", positions: ["top", "center left", "center", "center right", "bottom"] },
];

// Mock data for tarot cards meanings
const tarotCards = [
  { id: 1, name: "The Fool", image: "https://images.unsplash.com/photo-1556739442-4c892bcbe8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxUaGUlMjBGb29sJTIwdGFyb3QlMjBjYXJkfGVufDB8fHx8MTcxNTMxOTY1MXww&ixlib=rb-4.0.3&q=80&w=1080", meaning: "New beginnings, optimism, trust in life" },
  { id: 2, name: "The Magician", image: "https://images.unsplash.com/photo-1626937571481-51353f0c5735?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxUaGUlMjBNYWdpY2lhbiUyMHRhcm90JTIwY2FyZHxlbnwwfHx8fDE3MTUzMTk2NTJ8MA&ixlib=rb-4.0.3&q=80&w=1080", meaning: "Willpower, desire, creation, manifestation" },
  { id: 3, name: "The High Priestess", image: "https://images.unsplash.com/photo-1556739442-4c892bcbe8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxUaGUlMjBIaWdoJTIwUHJpZXN0ZXNzJTIwdGFyb3QlMjBjYXJkfGVufDB8fHx8MTcxNTMxOTY1Mnww&ixlib=rb-4.0.3&q=80&w=1080", meaning: "Intuitive insights, deep knowledge, mystery" },
  // Add more cards as needed
];

const Index = () => {
  const [selectedLayout, setSelectedLayout] = useState(null);
  const [drawnCards, setDrawnCards] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const selectLayout = (layout) => {
    setSelectedLayout(layout);
    const shuffledCards = tarotCards.sort(() => 0.5 - Math.random()).slice(0, layout.cards);
    setDrawnCards(shuffledCards.map((card) => ({ ...card, revealed: false })));
    onOpen();
  };

  const flipCard = (index) => {
    const newCards = [...drawnCards];
    newCards[index].revealed = !newCards[index].revealed;
    setDrawnCards(newCards);
  };

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <Text fontSize="2xl" fontWeight="bold">
          Select a Tarot Layout
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {layouts.map((layout) => (
            <Box key={layout.id} p={4} borderWidth="1px" borderRadius="lg" overflow="hidden" textAlign="center">
              <Image src={layout.image} alt={layout.name} boxSize="200px" objectFit="cover" />
              <Text mt={2} fontSize="xl">
                {layout.name}
              </Text>
              <Button mt={4} rightIcon={<FaArrowRight />} colorScheme="purple" onClick={() => selectLayout(layout)}>
                Choose
              </Button>
            </Box>
          ))}
        </Grid>
        {isOpen && (
          <Flex direction="column" align="center" mt={10}>
            <Text fontSize="2xl" mb={4}>
              Click on a card to reveal its meaning
            </Text>
            <Grid templateColumns={`repeat(${selectedLayout.cards}, 1fr)`} gap={4}>
              {drawnCards.map((card, index) => (
                <Box key={card.id} position="relative" w="150px" h="250px">
                  <Image src={card.revealed ? card.image : "https://images.unsplash.com/photo-1473181488821-2d23949a045a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0YXJvdCUyMGNhcmQlMjBiYWNrfGVufDB8fHx8MTcxNTMxOTY1Mnww&ixlib=rb-4.0.3&q=80&w=1080"} alt={card.name} boxSize="150px" objectFit="cover" onClick={() => flipCard(index)} />
                  {card.revealed && (
                    <Box position="absolute" top="0" left="0" right="0" bottom="0" bg="rgba(0, 0, 0, 0.7)" color="white" p={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                      <Text fontSize="md" fontWeight="bold">
                        {card.name}
                      </Text>
                      <Text fontSize="sm">{card.meaning}</Text>
                    </Box>
                  )}
                </Box>
              ))}
            </Grid>
          </Flex>
        )}
      </VStack>
    </Container>
  );
};

export default Index;
