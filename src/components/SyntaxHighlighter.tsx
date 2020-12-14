import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'

type Language = React.ComponentProps<typeof Highlight>['language']

interface Props {
  className: string
}

const SyntaxHighlighter: React.FC<Props> = ({ children, className }) => {
  const code = children as string
  if (!className || !className.includes('language-')) {
    return <div className="non-prism-code">{code}</div>
  }

  const language = className.replace(/language-/, '') as Language

  return (
    <Highlight {...defaultProps} code={code} language={language} theme={theme}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className={className} style={{ ...style }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </div>
      )}
    </Highlight>
  )
}

export default SyntaxHighlighter
