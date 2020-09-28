class CheckerboardPainter {
  paint(ctx, geom, properties) {
    const anchorSize = 20;
    const minX = 20;
    const minY = 20;
    const maxX = geom.width - minX;
    const maxY = geom.height - minY;

    const maxXAnchor = maxX - anchorSize;
    const maxYAnchor = maxY - anchorSize;

    ctx.beginPath();
    ctx.moveTo(anchorSize + minX, minY);
    ctx.lineTo(maxXAnchor, minY);
    ctx.quadraticCurveTo(maxX, minY, maxX, anchorSize + minY);
    ctx.lineTo(maxX, maxYAnchor);
    ctx.quadraticCurveTo(maxX, maxY, maxXAnchor, maxY);
    
    ctx.lineTo(anchorSize + minX + 100, maxY);
    ctx.lineTo(anchorSize + minX + 90, maxY + minY);
    ctx.lineTo(anchorSize + minX + 80, maxY);

    ctx.lineTo(anchorSize + minX, maxY);
    ctx.quadraticCurveTo(minX, maxY, minX, maxYAnchor);
    ctx.lineTo(minX, anchorSize + minY);
    ctx.quadraticCurveTo(minX, minY, anchorSize + minX, minY);
    ctx.stroke();
  }
}

// Register our class under a specific name
registerPaint('checkerboard', CheckerboardPainter);
