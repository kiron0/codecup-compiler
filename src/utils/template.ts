export const getTemplate = (fullCode: { html: string, css: string, javascript: string }, config: { html: string, javascript: string }) => {
          return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
  ${config.html}
  <title>Template</title>
</head>
<body>
  ${fullCode.html}
  
  <script src="script.js"></script>
  ${config.javascript}
</body>
</html>`
}