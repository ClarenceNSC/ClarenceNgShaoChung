// root.js

//function PublicBlogPost() {
//
//}
//
//function PrivateBlogPost() {
//}


function HeaderMessage () {
  return (
    <header className="header">
      <h1>My Blog</h1>
      <p>A blog for everything</p>
      </header>
)}

function BlogList (props) { 
console.log(props.blogpostsData)
return props.blogpostsData.map ((blog) => {
  return (
    <>
    <BlogPost
      key={blog.title}
      title={blog.title}
      author={blog.author}
      date={blog.date}
      content={blog.content}
      />
      </>
     )
  })
} 

function BlogPost (props) {
  return (
    <div>
    <h2>{props.title}</h2>
    <p><i>{"By"+ " "+ props.author} {"on" + " "+ props.date}</i></p> 
    <p> {props.content}</p>
    </div>
  )
}

function Footer({ year }) {
  return <footer className="footer">
    &copy; {year} My Blog. All rights reserved.</footer>;
}

function HeaderSection () {
return (
       <HeaderMessage /> 
  )
}

function BlogUpdate() {
  return 
    <div>
      <BlogPost className="blog-list"/>
    </div>
}

function FooterSection() {
  return (
    <Footer year={2024}/>
  )
}
  
function App() {
  return (
    <div>
      <HeaderSection />
      <BlogList blogpostsData={blogPosts}/>
      <BlogPost />
    </div>
  )
}

//function App() {
//  return (
//  <div>
//    <HeaderSection />
//    <PrivateBlogPost className="private-posts" blogData={blogPosts}/>
//    <BlogUpdate/>
//    <FooterSection />
//    <BlogPost/>
//  </div>
//  )
//}      

 const blogPosts = [
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