// root.js

//function PublicBlogPost() {
//
//}
//
//function PrivateBlogPost() {

//}
//
//function BlogList() {

//}
//
//const blog = [
//];

//function Footer() {
//
//};
//  
//
//function Blogspot() {
//
//
//}

//function Header(props) {
//  return ( 
//    <header>
//    <h1>{props.title}</h1>
//    <p>{props.tagline}</p>
//    </header>
//  );    
//}

//function HeaderMessage () {
//return <ul>
//  <Header
//    title="My Blog"
//    tagline="A blog for everything"
//  />
//</ul>
//}

//const BlogPost = () => {
//  return (   
//   <>
//    <h2>My First Blog Post</h2>
//    <p><i>By John Doe on Jun 01 2023</i></p>
//    <p>Welcome to my first blog post! Today, I want to share my journey into the world of blogging. It has been an exciting experience so far, and I can’t wait to see where this path leads me.</p>
//    </>
//  )
//}

function BlogUpdate (props) {
  return (
  <ul>
    <h2>{props.title}</h2>
    <p><i>By {props.author} on {props.date}</i></p>
    <p>{props.content}</p>
  </ul>
  )
}

function BlogList (props) { 
  console.log(props.blogpostsData)
  return props.blogpostsData.map ((blog) => {
    return (
      <>
      <BlogUpdate
        key={blog.title}
        title = {blog.title}
        author = {blog. author}
        date = {blog.date}
        content = {blog.content}
        />
        </>
    )
  })
}

function App() {
  return <div>
    <HeaderSection />
    <BlogList blogpostsData= {rawData}/>
    
  </div>
  }
function HeaderSection () {
  return <> 
          <BlogUpdate className="blog-list" />
        </>
  }


 const rawData = [
   {
     title: 'My First Blog Post',
     author: 'John Doe',
     date: 'June 1, 2023',
     content: 'Welcome to my first blog post! Today, I want to share my journey into the world of blogging. It has been an exciting experience so far, and I can’t wait to see where this path leads me.',
     isPrivate: true
   },
   {
     title: 'My Second Blog Post',
     author: 'Jane Smith',
     date: 'June 5, 2023',
     content: 'In this post, I’m discussing the importance of work-life balance. It’s essential to find time for both professional and personal activities to maintain overall well-being.',
     isPrivate: false
   },
   {
     title: 'A Day in the Life',
     author: 'Alice Johnson',
     date: 'June 10, 2023',
     content: 'Ever wondered what a day in my life looks like? Join me as I walk you through my daily routine, from morning coffee to evening relaxation.',
     isPrivate: false
   },
   {
     title: 'Tips for Healthy Eating',
     author: 'Bob Lee',
     date: 'June 15, 2023',
     content: 'Eating healthy doesn’t have to be complicated. Here are some simple and practical tips to help you make better food choices every day.',
     isPrivate: true
   },
   {
     title: 'Traveling on a Budget',
     author: 'Susan White',
     date: 'June 20, 2023',
     content: 'Dreaming of traveling the world but worried about the cost? This post covers my top tips for seeing new places without breaking the bank.',
     isPrivate: false
   }
  ]  
  
const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)