function Footer({ year }) {
    return <footer className="footer">
      &copy; {year} My Blog. All rights reserved.</footer>;
  }

  function FooterSection() {
    return (
      <Footer year={2024}/>
    )
  }

  function App() {
    return (
    <div>
      <FooterSection />
      
    </div>
    )
  } 