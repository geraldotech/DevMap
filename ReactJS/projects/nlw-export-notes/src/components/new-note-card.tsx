import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { ChangeEvent, useState } from 'react'
import { toast } from 'sonner'

// este app recebe uma programa, fn, content string e return vazio
interface NewNodeCard {
  onNoteCreated: (content: string) => void
}

let speechRecognition: SpeechRecognition | null = null

export function NewNoteCard({ onNoteCreated }: NewNodeCard) {
  const [shouldShowOnBoarding, setShouldShowOnBoarding] = useState(true)
  const [isRecording, setIsRecording] = useState(false)
  const [content, setContent] = useState('')

  function handleStartEditor() {
    setShouldShowOnBoarding(false)
  }

  function handleContentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    /*  const input = e.target.value
    if (!input.length) setShouldShowOnBoarding(true) */
    // console.log(e.target.value)

    setContent(e.target.value)

    if (e.target.value === '') {
      //setShouldShowOnBoarding((prev) => !prev)
      setShouldShowOnBoarding(true)
    }
  }

  function handleSaveNote(event: any) {
    event.preventDefault()

    if (content === '') {
      return
    }

    // um modo nao tao inteligente de pegar o value: console.warn(event.target[0].value)
    onNoteCreated(content)
    setShouldShowOnBoarding(true)
    setContent('')
    toast.success('Nota criada com sucesso!')
  }

  function handleStartRecording() {
    const isSpeechRecognitionAPIAviable = 'SpeechRecognition' || 'webkitSpeechRecognition' in window
    if (!isSpeechRecognitionAPIAviable) {
      alert('Navegador não oferece suporte a API de gravação')
      return
    }

    setIsRecording(true)
    setShouldShowOnBoarding(false)

    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition

    speechRecognition = new SpeechRecognitionAPI()
    speechRecognition.lang = 'pt-BR'
    speechRecognition.continuous = true
    speechRecognition.maxAlternatives = 1
    speechRecognition.interimResults = true

    speechRecognition.onresult = (event) => {
      // console.log(event.results)
      const transcription = Array.from(event.results).reduce((text, result) => {
        return text.concat(result[0].transcript)
      }, '')

      setContent(transcription)
    }

    speechRecognition.onerror = (event) => {
      console.error(event)
    }

    speechRecognition.start()
  }

  function handleStopRecoding() {
    setIsRecording(false)

    if (speechRecognition !== null) {
      speechRecognition.stop()
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger className="rounded-md flex flex-col bg-slate-700 p-5 text-left gap-3 hover:ring-2 hover:ring-slate-600  focus-visible:ring-2 focus-visible:ring-lime-400 outline-none">
        <span className="text-sm font-medium text-slate-200">Adicionar Nota</span>
        <p className="text-sm leading-6 text-slate-400">Grave uma nota em áudio que será convertida para texto automaticamente.</p>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="inset-0 fixed bg-black/60" />
        <Dialog.Content className="fixed overflow-hidden inset-0 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-[640px] w-full md:h-[60vh] bg-slate-700 md:rounded-md flex flex-col outline-none">
          <Dialog.Close className="absolute right-0 top-0 bg-slate-800 p-1.5 text-slate-400 hover:text-slate-100">
            <X className="size-5" />
          </Dialog.Close>
          <form className="flex-1 flex flex-col">
            <div className="flex flex-1 flex-col gap-3 p-5">
              <span className="text-sm font-bold text-slate-300">Adicionar nota</span>

              {shouldShowOnBoarding ? (
                <p className="text-sm leading-6 text-slate-400">
                  Comece{' '}
                  <button
                    type="button"
                    className="font-medium text-lime-400 hover:underline"
                    onClick={handleStartRecording}>
                    gravando uma nota
                  </button>{' '}
                  em áudio ou se preferir{' '}
                  <button
                    type="button"
                    className="font-medium text-lime-400 hover:underline"
                    onClick={handleStartEditor}>
                    utilize apenas texto.
                  </button>
                </p>
              ) : (
                <textarea
                  autoFocus
                  className="text-sm leading-6 text-slate-400 bg-transparent resize-none flex-1 outline-none"
                  onChange={handleContentChange}
                  value={content}></textarea>
              )}
            </div>

            {isRecording ? (
              <button
                className="w-full bg-slate-900 py-4 text-center  text-sm text-slate-300 outline-none font-bold hover:text-slate-100 flex items-center justify-center gap-2"
                type="button"
                onClick={handleStopRecoding}>
                <div className="size-3 rounded-full bg-red-500  animate-pulse" />
                Gravando (clique para interromper)
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSaveNote}
                className="w-full bg-lime-400 py-4 text-center  text-sm text-lime-950 outline-none font-bold hover:bg-lime-500">
                Salvar nota
              </button>
            )}
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
