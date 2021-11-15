import React from 'react'
import renderer from 'react-test-renderer'
import Support from "pages/find-support.js"

it('renders Support Page unchanged', () => {
  const tree = renderer.create(<Support />).toJSON()
  expect(tree).toMatchSnapshot()
})