const isHexColor = (color: string) => {
  // also check for 3-digit hex, 6-digit hex, and 8-digit hex
  // use regex for this
  return color.match(/#?[0-9a-f]{3,8}/ig)
}

export const Swatch = ({ color }: { color: string }) => {
  const rows = color.split('\n')
  return <>
    {rows.map((row: string) => {
    const swatches = row.split(/\s+/ig).filter(Boolean)
    return (
      <div style={{ display: 'flex' }}>
        {
          swatches.map((swatch) => {
            if (isHexColor(swatch) && !swatch.startsWith('#')) {
              swatch = `#${swatch}`
            }
            return (
              <div
                style={{
                  width: 100,
                  height: 100,
                  backgroundColor: swatch,
                }}
              />
            )
          })
        }
      </div>
    )
    })}
  </>
}