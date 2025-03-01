interface Printer {
  print(document: string): void;
}

interface Scanner {
  scan(document: string): void;
}

interface DocumentSharer {
  shareDocument(document: string, destination: string): void;
}

class InkjetPrinter implements Printer {
  print(document: string): void {
    console.log(`InkjetPrinter printing: ${document}`);
  }
}

class LaserPrinter implements Printer {
  print(document: string): void {
    console.log(`LaserPrinter printing: ${document}`);
  }
}

class MultiFunctionPrinter implements Printer, Scanner, DocumentSharer {
  print(document: string): void {
    console.log(`MultiFunctionPrinter printing: ${document}`);
  }

  scan(document: string): void {
    console.log(`MultiFunctionPrinter scanning: ${document}`);
  }

  shareDocument(document: string, destination: string): void {
    console.log(
      `MultiFunctionPrinter sharing document: ${document} to ${destination}`
    );
  }
}

//Usage Example:

const inkjet = new InkjetPrinter();
inkjet.print("Report.pdf");

const laser = new LaserPrinter();
laser.print("Invoice.pdf");

const mfp = new MultiFunctionPrinter();
mfp.print("Contract.pdf");
mfp.scan("Contract.pdf");
mfp.shareDocument("Contract.pdf", "https://XYZcloud.service.com/upload");
