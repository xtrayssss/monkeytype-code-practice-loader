# 🚀 MonkeyType Code Practice Loader

Enhance your typing practice on MonkeyType with real-world code examples! This Tampermonkey script automatically fetches diverse code snippets from programming resources, helping you improve your coding speed and accuracy.

## ✨ Features

The script provides a seamless way to load programming examples directly into MonkeyType's custom text mode. It offers:

- Automatic code fetching from specialized programming resources
- Support for multiple programming languages (JavaScript, Python, Java, C++, TypeScript)
- Smart filtering to ensure high-quality, readable code examples
- Convenient keyboard shortcut (Ctrl+Shift+L) and floating button interface
- Automatic cleanup and formatting of code snippets
- Fallback sources to ensure reliable operation

## 📥 Installation

1. First, make sure you have the Tampermonkey browser extension installed:
   - [Chrome Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)
   - [Firefox Tampermonkey](https://addons.mozilla.org/en-US/firefox/addon/tampermonkey/)
   - [Edge Tampermonkey](https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd)

2. Click the following link to install the script:
   [Install MonkeyType Code Practice Loader](https://raw.githubusercontent.com/xtrayssss/monkeytype-code-practice-loader/main/src/monkeytype-code-loader.user.js)

3. Tampermonkey will automatically detect the script and open its installation page
4. Click "Install" to complete the setup

## 🎮 Usage

1. Go to [MonkeyType](https://monkeytype.com)
2. Navigate to Custom Text mode
3. Click to place your cursor in the text editor
4. Either:
   - Press `Ctrl + Shift + K`
   - Or click the floating "Load Code Example" button
5. Start typing the loaded code!

## 🛠️ Technical Details

The script uses multiple sources to fetch code examples:

- Primary Source: CodeGrepper API
  - Provides curated programming solutions
  - Filtered for quality and readability
  - Supports multiple languages

- Backup Source: DevDocs API
  - Used when primary source is unavailable
  - Provides documentation examples
  - Ensures reliable operation

The script automatically:
- Removes HTML entities
- Trims excessive whitespace
- Filters out error messages
- Ensures appropriate length for typing practice

## ⚙️ Configuration

The script works out of the box with no configuration needed. However, you can modify these variables at the top of the script to customize your experience:

```javascript
const languages = ['javascript', 'python', 'java', 'cpp', 'typescript'];
const searchTerms = [
    'sort array',
    'find element',
    'remove duplicates',
    // ... etc
];
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Troubleshooting

If you encounter issues:

1. Make sure you're on MonkeyType's custom text mode
2. Verify that your cursor is placed in the text editor
3. Check if Tampermonkey is enabled
4. Try refreshing the page
5. If problems persist, check the browser console (F12) for error messages

## 🙏 Acknowledgments

- [MonkeyType](https://monkeytype.com) for the excellent typing platform
- [CodeGrepper](https://www.codegrepper.com) for their API
- [DevDocs](https://devdocs.io) for the backup API

## 📊 Version History

- v1.0 (2025-02-18)
  - Initial release
  - Multiple source support
  - Language variety
  - Smart filtering
  - Keyboard shortcuts

---

Made with ❤️ by [xtrayssss]

**Note**: This script is not affiliated with MonkeyType, CodeGrepper, or DevDocs. It is a community tool created to enhance typing practice with real-world code examples.
