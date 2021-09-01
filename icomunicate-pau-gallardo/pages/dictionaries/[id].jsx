import React from 'react';

export default function PictoDictionary() {
  return (
    <h1>This is a PictoDictionary</h1>
  );
}

export async function getStaticPaths() {
  const paths = getAllDictionariesIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
}
