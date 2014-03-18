<xsl:stylesheet 
  version="1.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
>

  <xsl:template match="div[@class='related']">
    <div>
      <xsl:apply-templates/>
    </div>
  </xsl:template>

  <xsl:template match="a[parent::div[@class='related']]">
    <a>
      <xsl:apply-templates select="@*"/>
      <xsl:attribute name='class'>Collection</xsl:attribute>
      <xsl:apply-templates/>
    </a>
  </xsl:template>

  <xsl:template match="namePart">
    <div class="Location">
      <xsl:apply-templates/>
    </div>
  </xsl:template>

  <!-- The identity transform -->
  <xsl:template match="/ | comment() | processing-instruction() | @* | node()">
    <xsl:copy>
      <xsl:apply-templates select="@* | node()"/>
    </xsl:copy>
  </xsl:template>

</xsl:stylesheet>
