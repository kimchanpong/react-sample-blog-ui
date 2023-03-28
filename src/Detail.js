import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ReactMarkdown from 'react-markdown';
import 'github-markdown-css/github-markdown.css';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from "remark-gfm";
import remarkToc from 'remark-toc';
import loadContent from './content.md';

function Detail() {
    const [content, setContent] = React.useState('');

    React.useEffect(() => {
		fetch(loadContent)
            .then(res => res.text())
            .then(text => setContent(text))
	})

    return (
        <Grid
            item
            xs={12}
            md={8}
            sx={{
                '& .markdown': {
                    py: 3,
                },
                mx: 'auto',
                bgcolor: 'transparent'
            }}
            className="markdown-body"
        >
            <Typography variant="h2" gutterBottom>
            제목부분
            </Typography>
            <ReactMarkdown 
                // children={content2} 
                remarkPlugins={[remarkGfm, remarkToc]} 
                rehypePlugins={[rehypeHighlight]}
            >
                {content} 
            </ReactMarkdown>
            {/* <ReactMarkdown
                components={{
                    code({ inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || '');
                    return !inline && match ? (
                        <SyntaxHighlighter
                            language={match[1]}
                            PreTag="div"
                            {...props}
                            style={docco}
                        >
                        {String(children).replace(/\n$/, '')}
                        </SyntaxHighlighter>
                    ) : (
                        <code className={className} {...props}>
                        {children}
                        </code>
                    );
                    },
                }}
                remarkPlugins={[remarkGfm, remarkToc]}
                >
                {content2}
            </ReactMarkdown> */}
        </Grid>
    );
}

export default Detail;