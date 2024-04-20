import CategoryItem from '../category-item/category-item.component'
import './directory.styles.scss'

const Directory = ({categories}) =>{
    return (
        <div className="directory-container">
      {categories.map((category)=>(//you can put 'category' instead of {title} and call it inside h2 as 'category.title' but destructuring it and  use {title} is better and shorter
        <CategoryItem key={category.id} category={category}/>
        ))}
      
    </div>
    )
}

export default Directory;