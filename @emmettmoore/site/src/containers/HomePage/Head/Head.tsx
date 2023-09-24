import HtmlHead from '@site/components/HtmlHead';

const Head = (): JSX.Element => {
  return (
    <HtmlHead
      description="Personal website for Emmett Moore"
      title="Emmett Moore">
      <script src="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.js"></script>
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v2.14.1/mapbox-gl.css"
        rel="stylesheet"
      />
    </HtmlHead>
  );
};

export default Head;
