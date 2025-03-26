const BlogPost = () => {
    return (   
     <div className="blog-post">
      <h2>My First Blog Post</h2>
      <p><i>By John Doe on Jun 01 2023</i></p>
      <p>Welcome to my first blog post! Today, I want to share my journey into the world of blogging. It has been an exciting experience so far, and I can’t wait to see where this path leads me.</p>
      </div>
    )
  }

  function App() {
    return (
    <div>
      <BlogPost />
    </div>
    )
  }      
  const domContainer = document.getElementById('root');
  const root = ReactDOM.createRoot(domContainer);
  root.render(<App />)  