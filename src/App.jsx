import { useState } from "react";

// Minimal local UI components (no external deps)
const Card = ({ children, isDark }) => (
  <div style={{
    borderRadius: 16,
    padding: 24,
    marginBottom: 20,
    background: isDark ? "linear-gradient(135deg, #1f1f1f 0%, #2a2a2a 100%)" : "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
    color: isDark ? "#fff" : "#1a1a1a",
    border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"}`,
    boxShadow: isDark ? "0 8px 32px rgba(0,0,0,0.3)" : "0 4px 20px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease"
  }}>
    {children}
  </div>
);


const Input = (props) => (
  <input
    {...props}
    style={{
      width: "100%",
      boxSizing: "border-box",
      padding: "12px 16px",
      borderRadius: 10,
      border: `1.5px solid ${props.isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"}`,
      marginBottom: 12,
      background: props.isDark ? "rgba(0,0,0,0.2)" : "rgba(92,51,176,0.05)",
      color: props.isDark ? "#fff" : "#1a1a1a",
      fontSize: "14px",
      transition: "all 0.2s ease",
      outline: "none",
      backdropFilter: "blur(10px)",
      ...props.style
    }}
    onFocus={(e) => {
      e.target.style.borderColor = props.isDark ? "rgba(92,51,176,0.8)" : "#5C33B0";
      e.target.style.boxShadow = props.isDark ? "0 0 0 3px rgba(92,51,176,0.2)" : "0 0 0 3px rgba(92,51,176,0.1)";
    }}
    onBlur={(e) => {
      e.target.style.borderColor = props.isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)";
      e.target.style.boxShadow = "none";
    }}
  />
);


const Textarea = (props) => (
  <textarea
    {...props}
    style={{
      width: "100%",
      boxSizing: "border-box",
      padding: "12px 16px",
      borderRadius: 10,
      border: `1.5px solid ${props.isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)"}`,
      marginBottom: 12,
      background: props.isDark ? "rgba(0,0,0,0.2)" : "rgba(92,51,176,0.05)",
      color: props.isDark ? "#fff" : "#1a1a1a",
      fontSize: "14px",
      transition: "all 0.2s ease",
      outline: "none",
      fontFamily: "inherit",
      backdropFilter: "blur(10px)",
      resize: "vertical",
      ...props.style
    }}
    onFocus={(e) => {
      e.target.style.borderColor = props.isDark ? "rgba(92,51,176,0.8)" : "#5C33B0";
      e.target.style.boxShadow = props.isDark ? "0 0 0 3px rgba(92,51,176,0.2)" : "0 0 0 3px rgba(92,51,176,0.1)";
    }}
    onBlur={(e) => {
      e.target.style.borderColor = props.isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)";
      e.target.style.boxShadow = "none";
    }}
  />
);


const Toggle = ({ checked, onChange }) => (
  <label style={{ display: "flex", alignItems: "center", gap: 12, cursor: "pointer" }}>
    <div
      style={{
        width: 54,
        height: 32,
        background: checked ? "linear-gradient(135deg, #5C33B0 0%, #7d4db8 100%)" : "rgba(0,0,0,0.1)",
        borderRadius: 16,
        position: "relative",
        transition: "all 0.3s ease",
        boxShadow: checked ? "0 4px 12px rgba(92,51,176,0.3)" : "none"
      }}
    >
      <div
        style={{
          width: 28,
          height: 28,
          background: "white",
          borderRadius: 14,
          position: "absolute",
          top: 2,
          left: checked ? 24 : 2,
          transition: "left 0.3s ease",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
        }}
      />
    </div>
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      style={{ display: "none" }}
    />
    <span style={{ fontSize: 18, fontWeight: 500 }}>{checked ? "🌙" : "☀️"}</span>
  </label>
);


const Button = ({ children, ...props }) => (
  <button
    {...props}
    style={{
      padding: "10px 24px",
      borderRadius: 10,
      border: "none",
      background: "linear-gradient(135deg, #5C33B0 0%, #7d4db8 100%)",
      color: "white",
      cursor: "pointer",
      fontWeight: 600,
      fontSize: 14,
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(92,51,176,0.3)",
      ...props.style
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = "translateY(-2px)";
      e.target.style.boxShadow = "0 6px 20px rgba(92,51,176,0.4)";
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = "translateY(0)";
      e.target.style.boxShadow = "0 4px 15px rgba(92,51,176,0.3)";
    }}
  >
    {children}
  </button>
);


export default function EmailInviteEditor() {
  const [darkMode, setDarkMode] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);
  const [headerImageUrl, setHeaderImageUrl] = useState("https://i.postimg.cc/tC0Tvq1C/Designer-(4).png");
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [signature, setSignature] = useState("Best regards,<br />Elin, Oscar, Kaleb, Daisy, Fabian & Jessica<br />Vivicta Young Professionals Stockholm");
  const [showFormsLink, setShowFormsLink] = useState(false);
  const [formsLink, setFormsLink] = useState("");
  const [showDate, setShowDate] = useState(false);
  const [date, setDate] = useState("");
  const [showLocation, setShowLocation] = useState(false);
  const [location, setLocation] = useState("");
  const [footerCity, setFooterCity] = useState("Stockholm");
  const [footerEmail, setFooterEmail] = useState("vyps@tietoevry.com");

  const generatedHtml = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
</head>
<body>
<table width="602" cellpadding="0" cellspacing="0" style="background:#F8F4F1;font-family:Arial,sans-serif;border-collapse:collapse;">
  <tr>
    <td style="border-bottom:1px solid #fff;text-align:center;">
      <img src="${headerImageUrl}" alt="Header image" style="max-width:100%;display:block;" />
    </td>
  </tr>
  <tr>
    <td style="padding:27px 22px 31px 22px;color:#000;font-size:14px;">
      <h1 style="font-size:24px;margin:0 0 15px 0;font-family:Arial,sans-serif;color:#000;font-weight:bold;">${title}</h1>
      <p style="margin:0 0 18px 0;line-height:18px;font-size:14px;">${paragraph.replace(/\n/g, "<br />")}</p>
      ${showDate && date ? `<p style="margin:12px 0 8px 0;color:#666;font-size:13px;"><em>📅 ${date}</em></p>` : ""}
      ${showLocation && location ? `<p style="margin:0 0 24px 0;color:#666;font-size:13px;"><em>📍 ${location}</em></p>` : ""}
      ${showFormsLink && formsLink ? `<table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin-top:24px;"><tr><td align="center"><table role="presentation" cellspacing="0" cellpadding="0" border="0"><tr><td style="border-collapse:collapse;border-radius:6px;background:#5C33B0;"><a href="${formsLink}" style="display:block;padding:12px 28px;background:#5C33B0;color:#ffffff;text-decoration:none;font-weight:bold;font-size:14px;border-radius:6px;">Register here</a></td></tr></table></td></tr></table>` : ""}
      <p style="margin-top:24px;font-style:italic;font-size:13px;color:#333;">${signature}</p>
    </td>
  </tr>
  <tr>
    <td style="background:#5C33B0;padding:22px;color:#fff;font-size:11px;">
      ® VYPS, ${footerCity} ${new Date().getFullYear()}<br />
      <a href="mailto:${footerEmail}" style="color:white;text-decoration:underline;">Questions? Send us an email!</a>
    </td>
  </tr>
</table>
</body>
</html>`;


  return (
    <div style={{
      background: darkMode ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)" : "linear-gradient(135deg, #ffffff 0%, #f0f2f5 100%)",
      color: darkMode ? "#fff" : "#1a1a1a",
      minHeight: "100vh",
      transition: "background 0.3s ease",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "24px 32px", borderBottom: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)"}`, backdropFilter: "blur(10px)" }}>
        <h1 style={{ margin: 0, fontSize: 28, fontWeight: 700, background: "linear-gradient(135deg, #5C33B0 0%, #7d4db8 100%)", backgroundClip: "text", WebkitBackgroundClip: "text", color: "transparent" }}>Email Invite Editor</h1>
        <Toggle checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />
      </div>
      <div style={{ display: "flex", gap: 32, padding: 32, maxWidth: "none", margin: "0 auto", alignItems: "flex-start" }}>
      {/* LEFT: FORM */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <Card isDark={darkMode}>
          <h2 style={{ margin: "0 0 20px 0", fontSize: 20, fontWeight: 700, color: "#5C33B0" }}>Editable content</h2>
          <label style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 6, color: darkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)" }}>Header Image URL</label>
          <Input
            isDark={darkMode}
            value={headerImageUrl}
            onChange={(e) => setHeaderImageUrl(e.target.value)}
            placeholder="Header image URL"
          />
          <label style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 6, color: darkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)" }}>Title</label>
          <Input
            isDark={darkMode}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
          />
          <label style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 6, color: darkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)" }}>Paragraph</label>
          <Textarea
            isDark={darkMode}
            value={paragraph}
            onChange={(e) => setParagraph(e.target.value)}
            placeholder="Main paragraph (line breaks supported)"
            rows={4}
          />
          <label style={{ display: "flex", alignItems: "center", marginBottom: 16, cursor: "pointer", fontSize: 14, fontWeight: 500 }}>
            <input
              type="checkbox"
              checked={showDate}
              onChange={(e) => setShowDate(e.target.checked)}
              style={{
                marginRight: 10,
                width: 18,
                height: 18,
                cursor: "pointer",
                accentColor: "#5C33B0",
                appearance: "auto",
                filter: darkMode ? "none" : "brightness(1.8) contrast(1.2)"
              }}
            />
            Include date
          </label>
          {showDate && (
            <>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 6, color: darkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)" }}>Date</label>
              <Input
                isDark={darkMode}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="📅 Date"
              />
            </>
          )}
          <label style={{ display: "flex", alignItems: "center", marginBottom: 16, cursor: "pointer", fontSize: 14, fontWeight: 500 }}>
            <input
              type="checkbox"
              checked={showLocation}
              onChange={(e) => setShowLocation(e.target.checked)}
              style={{
                marginRight: 10,
                width: 18,
                height: 18,
                cursor: "pointer",
                accentColor: "#5C33B0",
                appearance: "auto",
                filter: darkMode ? "none" : "brightness(1.8) contrast(1.2)"
              }}
            />
            Include location
          </label>
          {showLocation && (
            <>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 6, color: darkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)" }}>Location</label>
              <Input
                isDark={darkMode}
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="📍 Location"
              />
            </>
          )}
          <label style={{ display: "flex", alignItems: "center", marginBottom: 16, cursor: "pointer", fontSize: 14, fontWeight: 500 }}>
            <input
              type="checkbox"
              checked={showFormsLink}
              onChange={(e) => setShowFormsLink(e.target.checked)}
              style={{
                marginRight: 10,
                width: 18,
                height: 18,
                cursor: "pointer",
                accentColor: "#5C33B0",
                appearance: "auto",
                filter: darkMode ? "none" : "brightness(1.8) contrast(1.2)"
              }}
            />
            Include registration link
          </label>
          {showFormsLink && (
            <>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 6, color: darkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)" }}>Microsoft Forms Link</label>
              <Input
                isDark={darkMode}
                value={formsLink}
                onChange={(e) => setFormsLink(e.target.value)}
                placeholder="Microsoft Forms link"
              />
            </>
          )}
          <label style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 6, color: darkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)" }}>Signature</label>
          <Textarea
            isDark={darkMode}
            value={signature}
            onChange={(e) => setSignature(e.target.value)}
            placeholder="Signature (HTML allowed)"
            rows={3}
          />
          <label style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 6, color: darkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)" }}>Footer City/Location</label>
          <Input
            isDark={darkMode}
            value={footerCity}
            onChange={(e) => setFooterCity(e.target.value)}
            placeholder="e.g., Solna Stockholm"
          />
          <label style={{ display: "block", fontSize: 12, fontWeight: 600, marginBottom: 6, color: darkMode ? "rgba(255,255,255,0.7)" : "rgba(0,0,0,0.6)" }}>Contact Email</label>
          <Input
            isDark={darkMode}
            value={footerEmail}
            onChange={(e) => setFooterEmail(e.target.value)}
            placeholder="Contact email address"
          />
        </Card>
      </div>


      {/* RIGHT: PREVIEW */}
      <div style={{ flex: 1, minWidth: "700px", width: "100%" }}>
        <Card isDark={darkMode}>
          <h2 style={{ margin: "0 0 20px 0", fontSize: 20, fontWeight: 700, color: "#5C33B0" }}>Live email preview</h2>
          <div
            style={{
              borderRadius: 12,
              background: "#fff",
              padding: 20,
              border: `1px solid ${darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.08)"}`,
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)"
            }}
            dangerouslySetInnerHTML={{ __html: generatedHtml }}
          />
          <div style={{ marginTop: 20 }}>
            <p style={{ fontSize: 12, color: darkMode ? "rgba(255,255,255,0.6)" : "rgba(0,0,0,0.6)" }}>
              <em>Highlight the content above and copy-paste it into an Outlook email draft</em>
            </p>
          </div>
        </Card>
      </div>
    </div>
    </div>
  );
}
