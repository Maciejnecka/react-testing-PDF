import React, { StrictMode } from 'react';
class WillMount extends React.Component {
  componentWillMount() {}
  render() {
    return null;
  }
}
class StringRef extends React.Component {
  render() {
    return <div ref="stringRef" />;
  }
}
export default function TestStrictMode() {
  return (
    <section>
      <StrictMode>
        <WillMount />
      </StrictMode>
      <StringRef />
    </section>
  );
}
