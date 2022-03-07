from flask import Flask,render_template,request
from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer
from googletrans import Translator
from langdetect import detect

app = Flask(__name__) 
english_bot = ChatBot("Chatterbot",storage_adapter="chatterbot.storage.SQLStorageAdapter")
trainer = ChatterBotCorpusTrainer(english_bot)
trainer.train("chatterbot.corpus.english")
trainer.train("data/data.yml")



@app.route("/")
def index():
     return render_template("index.html") #to send context to html

@app.route("/get")
def get_bot_response():
     userText = request.args.get("msg") #get data from input,we write js  to index.html
     languagedetect1 = detect(userText)

     translator = Translator()
     print(userText)
     translated_sentence = translator.translate(userText,src=languagedetect1,code="en")
     print(translated_sentence)
     translated_sentence2=translated_sentence.text
     print(translated_sentence2)
     translated2 = str(english_bot.get_response(translated_sentence2))
     print(translated2)
     def again_reponse():
          translated3 = translator.translate(translated2,src="en",code="hi")
          print(translated3)
          translated4 = translated3.text
          print(translated4)
          return translated4
     return again_reponse()

     


if __name__ == "__main__":
     app.run(debug = True)


