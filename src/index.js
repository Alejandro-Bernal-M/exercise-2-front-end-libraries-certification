
$(document).ready(()=> {
  const defaultMarkdown = "# Heading (H1 size)\n\n## Subheading (H2 size)\n\n[Link](https://example.com)\n\n`Inline code`\n\n```\n// Code block\nfunction example() {\n  console.log(\"Hello, World!\");\n}\n```\n\n- List item 1\n- List item 2\n\n> Blockquote\n\n![Image](https://example.com/image.jpg)\n\n**Bolded text**";
          ;

  $('#editor').val(defaultMarkdown);

  $('#preview').html(marked.parse(defaultMarkdown));

  $('#editor').on('input', updatePreview);

  var content;
  function updatePreview() {
    content = $('#editor').val();
    $('#preview').html(marked.parse(content, {breaks: true}));
  }
  // $('#editor').on('input', function() {
  //   content = $(this).val();
  //   console.log(content);
  //   $('#preview').html(marked.parse(content));
  // });
})