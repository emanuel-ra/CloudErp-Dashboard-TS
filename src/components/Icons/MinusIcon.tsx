export function MinusIcon(props:any) {
    const { size=6 } = props;
    return (
      <svg 
        data-slot="icon" 
        fill="none" 
        stroke-width="1.5" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg" 
        aria-hidden="true" 
        className={`w-${size} h-${size}`}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14"></path>
      </svg>
    );
  }