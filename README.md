# tarot-magic

A tarot reading app with: Layout Selection Component: This component allows the user to choose from different tarot spread layouts such as Celtic Cross, Three Card Spread, etc. It displays the available layouts in a visually appealing way, possibly as cards or tiles, and allows the user to click on their desired layout.
Card Drawing Component: Once the user selects a tarot spread layout, this component handles the process of drawing the cards. It generates the specified number of tarot cards based on the selected layout. Each card is displayed face-down initially.
Card Display Component: After the cards are drawn, this component displays the tarot cards according to the layout specifications. For example, in a Celtic Cross layout, the cards are positioned in specific locations on the screen according to the traditional layout. Each card may have a flip animation to reveal its face.
Interactivity and Animation: The UI should be interactive, allowing users to click on individual cards to flip them over and reveal their meanings. Smooth animations should be implemented to enhance the user experience, such as card flipping animations and transitions between different layouts.
Meaning Display Component: Once a card is flipped over, this component displays the meaning of the card to the user. It may provide a brief description of the card's symbolism and interpretation, possibly with additional information or links for further reading.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/tarot-magic.git
cd tarot-magic
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
