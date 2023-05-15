# My Yu-Gi-Oh Collection 

## Description

Welcome to my Yu-Gi-Oh card collection. Here, you can view my collection, add a new card to the collection, and remove a card from the collection. This project let's you can maintain a virtual inventory of sorts on the cards you collect over time. 

## Features
Here you will see the cards that we already have in possession rendered on page load. You can view the name, image of the card, it's abilities/description, and view the attack and defense points of the card. You can also fill out a form and submit a new card to the collection. Once you fill the data and click the "Add Card" button, your new card will show on the bottom. This will also get saved to the db.json file and retain the info on page refresh. You also have the option to remove the card from your collection if you no longer possess it by clicking the "Remove" button on the card. Let's grow the collection over time!   


## Installation

Please have JSON server installed and running to properly interact with this project.

**Install**: json server
```
npm install -g json-server
```
**Start**: json server
```
 json-server --watch db.json
```
---
## Usage

```
// start json server on file db.json
 json-server --watch db.json
```
**Open** html file in your browser:
```
//Mac
open index.html
```
```
//Windows
explorer.exe index.html
```
---
## Credit
While the data was entered manually in the db.json file for testing purposes, the free Yu-Gi-Oh API [https://ygoprodeck.com/card-database/?&num=24&offset=0](https://ygoprodeck.com/card-database/?&num=24&offset=0) was used for reference card data such as the images and description.   


## License
MIT License

Copyright (c) 2023 Harpreet Singh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 


