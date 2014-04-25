<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  version="2.0">

  <xsl:output encoding="UTF-8" media-type="text/html" indent="yes"
    method="xhtml" doctype-system="about:legacy-compat"
    omit-xml-declaration="yes"
    exclude-result-prefixes="#all"/>

  <xsl:template match="@*|node()">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()"/>
    </xsl:copy>
  </xsl:template>

</xsl:stylesheet>
