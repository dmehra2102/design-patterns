interface Documents {
  convert(file: string): void;
}

class TextConverter implements Documents {
  convert(file: string) {
    console.log(`Your file ${file} has been converted to Text`);
  }
}

class PDFConverter implements Documents {
  convert(file: string) {
    console.log(`Your file ${file} has been converted to PDF.`);
  }
}

class DOCXConverter implements Documents {
  convert(file: string) {
    console.log(`Your file ${file} has been converted to DOCX.`);
  }
}

class ConvertorFactory {
  static createConvertor(value: "TEXT" | "PDF" | "DOCX"): Documents {
    switch (value) {
      case "DOCX":
        return new DOCXConverter();

      case "PDF":
        return new PDFConverter();

      case "TEXT":
        return new TextConverter();
    }
  }
}

const textConverter = ConvertorFactory.createConvertor("TEXT");
textConverter.convert("file.txt");

const pdfConverter = ConvertorFactory.createConvertor("PDF");
pdfConverter.convert("file.txt");
