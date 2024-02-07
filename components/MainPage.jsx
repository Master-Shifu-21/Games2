const React = require('react');
const Layout = require('./Layout');

function MainPage({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <h1>MainPage</h1>
      <button className='btn btn-danger version'>Get version</button>
  </Layout>
  )
  
}

module.exports = MainPage;

