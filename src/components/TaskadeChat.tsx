
import { useEffect } from "react";

declare global {
  interface Window {
    TaskadeEmbed?: {
      AgentPublicChatPopup: {
        init: (config: { publicAgentId: string }) => void;
      };
    };
  }
}

export default function TaskadeChat() {
  useEffect(() => {
    // Create script element for Taskade embed library
    const script = document.createElement("script");
    script.src = "https://assets.taskade.com/embeds/latest/taskade-embed.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Initialize the chat popup after the script loads
    script.onload = () => {
      if (window.TaskadeEmbed) {
        window.TaskadeEmbed.AgentPublicChatPopup.init({
          publicAgentId: '01JQ3HBG8WV1XVSYS200G34NAC',
        });
      }
    };

    // Clean up on component unmount
    return () => {
      document.body.removeChild(script);
      // Remove any Taskade elements that might have been added to the DOM
      const taskadeElements = document.querySelectorAll('[id^="taskade-"]');
      taskadeElements.forEach(element => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
    };
  }, []);

  return null; // This is a non-visual component
}
