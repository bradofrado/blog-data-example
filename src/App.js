import logo from './logo.svg';
import './App.css';
import { NavbarComponent } from './navbar';

const posts = [
  {
    title: 'About Functional Programming',
    banner: './cat.jpeg',
    publishedDate: 'January 6',
    author: 'Tom',
    preview: 'Functional programming is a thing like art',
    readingTime: 10,
    likes: 4
  },
  {
    title: 'Something about Vue',
    banner: './cat.jpeg',
    publishedDate: 'Feburary 6',
    author: 'Bob',
    preview: 'Vue is not as good as React as some people say...',
    readingTime: 100,
    likes: 40
  },
  {
    title: 'John Wayne Aiport',
    banner: './cat.jpeg',
    publishedDate: 'March 6',
    author: 'Bob',
    preview: 'Let\'s go through some good and bad things about john wayne airport',
    readingTime: 2,
    likes: 2
  },
  {
    title: 'Living',
    banner: './cat.jpeg',
    publishedDate: 'April 10',
    author: 'Joe',
    preview: 'Living and dying in a wayside manner',
    readingTime: 15,
    likes: 14
  },
]
function App() {
  const items = [
    {
      link: '/',
      label: 'Archive'
    },
    {
      link: '/',
      label: 'Top'
    },
    {
      link: '/',
      label: 'Author'
    },
  ]
  return (<div className="dark:bg-gray-700">
    <NavbarComponent items={items} path="/"/>
    <div className="flex flex-col gap-y-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-y-10 p-10">
      {posts.map(post => <Post post={post}/>)}
    </div>
    <Footer/>
  </div>);
}

const Post = ({ post }) => {
  return (
    <div className="max-w-md w-full mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <img
        className="h-48 w-full object-cover md:h-64"
        src={post.banner}
        alt={post.title}
      />
      <div className="p-4">
        <div className="mb-2">
          <p className="text-gray-500 dark:text-gray-400 text-xs mb-1">{post.publishedDate}</p>
          <p className="text-gray-800 dark:text-white text-lg font-semibold">{post.title}</p>
          <p className="text-gray-700 dark:text-gray-300">By {post.author}</p>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{post.preview}</p>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-xs">{post.readingTime} min read</p>
          <p className="text-gray-500 dark:text-gray-400 text-xs">{post.likes} likes</p>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 dark:bg-gray-800 p-4">
      <div className="container mx-auto text-center text-gray-600 dark:text-gray-400 text-sm">
        &copy; {currentYear} Blog thing. All rights reserved.
      </div>
    </footer>
  );
};

export default App;
