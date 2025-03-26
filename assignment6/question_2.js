function HeaderMessage () {
    return (
      <header className="header">
        <h1>My Blog</h1>
        <p>A blog for everything</p>
        </header>
  )}

function HeaderSection () {
    return (
           <HeaderMessage /> 
      )
    }

    
function App() {
    return (
    <div>
      <HeaderSection />
      
    </div>
    )
  } 