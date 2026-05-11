/// <reference types="vite/client" />

declare namespace JSX {
	interface IntrinsicElements {
		"arcgis-embedded-map": any;
	}
}

interface ArcGISEmbeddedMapProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
	"item-id"?: string;
	theme?: "light" | "dark";
	"legend-enabled"?: string | boolean;
	"time-zone-label-enabled"?: string | boolean;
	center?: string;
	scale?: string | number;
	"portal-url"?: string;
}
