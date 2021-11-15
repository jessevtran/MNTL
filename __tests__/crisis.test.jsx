import React from 'react'
import renderer from 'react-test-renderer'
import Crisis from "pages/crisis.js"

it('renders crisis unchanged', () => {
  const tree = renderer.create(<Crisis />).toJSON()
  expect(tree).toMatchSnapshot()
})