import { parse } from "parse5";
import { serializeToString } from "xmlserializer";
import prettier from "prettier";
import fs from "fs";

/**
 * Convert a standard HTML5 string to XHTML-compliant string
 *
 * @param {string} htmlString : html string to convert to xhtml
 */
function html2xhtml(html, skipHeader = false) {
    const bodyHtml = html.window.document.documentElement.outerHTML;
    const dom = parse(bodyHtml);
    const xmlHeader = skipHeader
        ? ""
        : `<?xml version="1.0" encoding="utf-8"?>\n`;
    const parsedString = `${xmlHeader}${serializeToString(
        dom.childNodes[0].childNodes[1].childNodes[0],
    )}\n`;
    return prettier.format(parsedString, { parser: "html" });
}

function html2xhtml2(html) {
    const bodyHtml = html.outerHTML;
    const dom = parse(bodyHtml);
    const parsedString = `${serializeToString(
        dom.childNodes[0].childNodes[1].childNodes[0],
    )}\n`;
    return prettier.format(parsedString, { parser: "html" });
}

function rawSvgToHtml(data) {
    return data
        .replace(/<svg.*>/, "<div hidden>\n<svg>")
        .replace("</svg>", "</svg>\n</div>")
        .replace(/<\?xml.*\?>(?:\s|\S)/, "");
}

async function removeFile(file) {
    try {
        await fs.promises.unlink(file);
    } catch (e) {
        return;
    }
}

export {
    html2xhtml,
    html2xhtml2,
    rawSvgToHtml,
    removeFile,
};
