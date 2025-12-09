import { jsPDF } from 'jspdf';

interface ArchetypeData {
  primaryArchetype: {
    key: string;
    name: string;
    description: string;
    superpowers: string;
    score: number;
  };
  secondaryArchetypes: Array<{
    key: string;
    name: string;
    description: string;
    score: number;
  }>;
  allScores: Array<{
    key: string;
    name: string;
    score: number;
  }>;
  enhancement: any;
}

export const generateArchetypePDF = (data: ArchetypeData) => {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();
  const margin = 20;
  let yPosition = margin;

  // Helper function to check if we need a new page
  const checkPageBreak = (heightNeeded: number) => {
    if (yPosition + heightNeeded > pageHeight - margin) {
      doc.addPage();
      yPosition = margin;
      return true;
    }
    return false;
  };

  // Helper function to add wrapped text
  const addWrappedText = (text: string, fontSize: number, maxWidth: number, isBold = false) => {
    doc.setFontSize(fontSize);
    if (isBold) {
      doc.setFont('helvetica', 'bold');
    } else {
      doc.setFont('helvetica', 'normal');
    }

    const lines = doc.splitTextToSize(text, maxWidth);
    const lineHeight = fontSize * 0.5;

    checkPageBreak(lines.length * lineHeight);

    lines.forEach((line: string) => {
      doc.text(line, margin, yPosition);
      yPosition += lineHeight;
    });

    return yPosition;
  };

  // Header
  doc.setFillColor(20, 184, 166); // Teal color
  doc.rect(0, 0, pageWidth, 40, 'F');

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text('Your Storytelling Archetype', pageWidth / 2, 15, { align: 'center' });

  doc.setFontSize(12);
  doc.setFont('helvetica', 'normal');
  doc.text('NUAA SHARE & BUILD Peer Work Foundations Training', pageWidth / 2, 28, { align: 'center' });

  yPosition = 50;
  doc.setTextColor(0, 0, 0);

  // Primary Archetype Section
  doc.setFillColor(220, 252, 231); // Light green background
  doc.rect(margin, yPosition, pageWidth - 2 * margin, 35, 'F');

  yPosition += 10;
  doc.setFontSize(20);
  doc.setFont('helvetica', 'bold');
  doc.text(data.primaryArchetype.name, pageWidth / 2, yPosition, { align: 'center' });

  yPosition += 8;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'italic');
  doc.text('Your Primary Archetype', pageWidth / 2, yPosition, { align: 'center' });

  yPosition += 15;

  // Description
  yPosition += 5;
  addWrappedText(data.primaryArchetype.description, 11, pageWidth - 2 * margin);
  yPosition += 5;

  // Superpowers
  doc.setFillColor(240, 240, 240);
  doc.rect(margin, yPosition, pageWidth - 2 * margin, 20, 'F');
  yPosition += 6;

  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.text('Your Storytelling Superpowers:', margin + 5, yPosition);
  yPosition += 6;

  doc.setFont('helvetica', 'italic');
  addWrappedText(data.primaryArchetype.superpowers, 10, pageWidth - 2 * margin - 10);
  yPosition += 8;

  // Secondary Archetypes
  if (data.secondaryArchetypes.length > 0) {
    checkPageBreak(30);
    yPosition += 5;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('You also bring strong elements of:', margin, yPosition);
    yPosition += 8;

    data.secondaryArchetypes.forEach((arch) => {
      checkPageBreak(25);

      doc.setFillColor(230, 240, 250);
      doc.rect(margin, yPosition, pageWidth - 2 * margin, 20, 'F');
      yPosition += 6;

      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text(arch.name, margin + 5, yPosition);
      yPosition += 6;

      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      addWrappedText(arch.description, 10, pageWidth - 2 * margin - 10);
      yPosition += 5;
    });
  }

  // Score Breakdown
  checkPageBreak(60);
  yPosition += 5;
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Your Full Archetype Profile:', margin, yPosition);
  yPosition += 8;

  const maxScore = data.allScores[0]?.score || 1;
  data.allScores.slice(0, 6).forEach((arch) => {
    checkPageBreak(12);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text(arch.name, margin, yPosition);

    // Draw score bar
    const barWidth = 100;
    const barHeight = 6;
    const barX = margin + 50;
    const scorePercentage = (arch.score / maxScore) * 100;
    const filledWidth = (barWidth * scorePercentage) / 100;

    doc.setFillColor(230, 230, 230);
    doc.rect(barX, yPosition - 4, barWidth, barHeight, 'F');

    doc.setFillColor(20, 184, 166);
    doc.rect(barX, yPosition - 4, filledWidth, barHeight, 'F');

    doc.text(arch.score.toString(), barX + barWidth + 5, yPosition);

    yPosition += 10;
  });

  // SHARE Principles
  if (data.enhancement?.sharePrinciples) {
    doc.addPage();
    yPosition = margin;

    doc.setFontSize(16);
    doc.setFont('helvetica', 'bold');
    doc.text('Your Storytelling Principles', margin, yPosition);
    yPosition += 10;

    // Intentional
    checkPageBreak(30);
    doc.setFillColor(219, 234, 254);
    doc.rect(margin, yPosition, pageWidth - 2 * margin, 5, 'F');
    yPosition += 4;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('INTENTIONAL', margin + 2, yPosition);
    yPosition += 6;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    addWrappedText(data.enhancement.sharePrinciples.intentional, 10, pageWidth - 2 * margin - 4);
    yPosition += 5;

    // Purposeful
    checkPageBreak(30);
    doc.setFillColor(209, 250, 229);
    doc.rect(margin, yPosition, pageWidth - 2 * margin, 5, 'F');
    yPosition += 4;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('PURPOSEFUL', margin + 2, yPosition);
    yPosition += 6;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    addWrappedText(data.enhancement.sharePrinciples.purposeful, 10, pageWidth - 2 * margin - 4);
    yPosition += 5;

    // Meaningful
    checkPageBreak(30);
    doc.setFillColor(243, 232, 255);
    doc.rect(margin, yPosition, pageWidth - 2 * margin, 5, 'F');
    yPosition += 4;
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('MEANINGFUL', margin + 2, yPosition);
    yPosition += 6;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    addWrappedText(data.enhancement.sharePrinciples.meaningful, 10, pageWidth - 2 * margin - 4);
    yPosition += 5;
  }

  // Boundaries Section
  if (data.enhancement?.boundaries) {
    checkPageBreak(40);
    yPosition += 5;
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    doc.text('Boundaries & Self-Care', margin, yPosition);
    yPosition += 8;

    // Watch For
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Things to watch for:', margin, yPosition);
    yPosition += 6;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);

    data.enhancement.boundaries.watchFor.forEach((item: string) => {
      checkPageBreak(8);
      const bullet = '• ';
      const lines = doc.splitTextToSize(item, pageWidth - 2 * margin - 10);
      doc.text(bullet, margin + 2, yPosition);
      doc.text(lines, margin + 7, yPosition);
      yPosition += lines.length * 4;
    });

    // Self-Care Tips
    yPosition += 3;
    checkPageBreak(20);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Self-care tips:', margin, yPosition);
    yPosition += 6;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);

    data.enhancement.boundaries.selfCareTips.forEach((item: string) => {
      checkPageBreak(8);
      const bullet = '• ';
      const lines = doc.splitTextToSize(item, pageWidth - 2 * margin - 10);
      doc.text(bullet, margin + 2, yPosition);
      doc.text(lines, margin + 7, yPosition);
      yPosition += lines.length * 4;
    });
  }

  // Footer on last page
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(128, 128, 128);
    doc.text(
      `Generated by NUAA Storyteller Archetype Quiz | Page ${i} of ${totalPages}`,
      pageWidth / 2,
      pageHeight - 10,
      { align: 'center' }
    );
  }

  // Save the PDF
  const fileName = `${data.primaryArchetype.name.replace(/\s+/g, '_')}_Archetype.pdf`;
  doc.save(fileName);
};
