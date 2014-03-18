<xsl:stylesheet 
  version="1.0" 
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
>

  <xsl:template match="div[@class='Location']">
    <span class="Location">
      <xsl:apply-templates/>
    </span>
  </xsl:template>

  <!-- The identity transform -->
  <xsl:template match="/ | comment() | processing-instruction() | @* | node()">
    <xsl:copy>
      <xsl:apply-templates select="@* | node()"/>
    </xsl:copy>
  </xsl:template>

</xsl:stylesheet>
