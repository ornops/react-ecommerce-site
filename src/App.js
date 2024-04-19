import './categories.styles.scss'
import CategoryItem from './components/category-item/category-item.component';

const App = () => {

  const categories = [
    {
      "id": 1,
      "title": "hats",
      "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      "id": 2,
      "title": "jackets",
      "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      "id": 3,
      "title": "sneakers",
      "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      "id": 4,
      "title": "womens",
      "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      "id": 5,
      "title": "mens",
      "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
    }
  ];
  return (
    <div className="categories-container">
      {categories.map((category)=>//you can put 'category' instead of {title} and call it inside h2 as 'category.title' but destructuring it and  use {title} is better and shorter
        <CategoryItem key={category.id} category={category}/>
        )}
      
    </div>
  );
}

export default App;
