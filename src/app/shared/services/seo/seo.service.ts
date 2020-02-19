import {Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Injectable()
export class SeoService {
  readonly separator = ' | ';
  readonly title = 'Sherwin Dapito: Web Developer';
  readonly description = 'An Enthusiastic Web Developer With a Passion for Learning. <br>A coder and a musician who want to learn more, grow and explore the world.';
  readonly image = '/public/assets/images/sample-picture.jpg';
  readonly metaDefault = [{'description': this.description}, {'og:image': this.image}];

  constructor(private titleService: Title,
              private meta: Meta) {

  }

  private static getTag(name: string) {
    return 'property="{name}"'.replace('{name}', name);
  }
  set(title: string, description: string, image: string, titleTranslationKey: boolean = false) {
    this.setDescription(description);
    this.setImage(image);
  }

  setMetas(description: string, image: string, url: string) {
    this.setDescription(description);
    this.setImage(image);
    this.setUrl(url);
  }

  private setUrl(url: string) {
    this.upsertMeta('og:url', url);
  }
  private setDescription(description: string) {
    const input = description ? description.split(/\n/)[0] : null;
    this.upsertMeta('description', input);
    this.upsertMeta('og:description', input);
  }


  setTitle(title: string, prefix: string, addSuffix: boolean = false) {
    let result = prefix || '';
    if (title) {
      result = this.smartConcat(result, title);
    }
    if (addSuffix) {
      result = this.smartConcat(result, 'Sherwin Dapito: Web Developer');
    }
    this.titleService.setTitle(result);
    this.upsertMeta('og:title', result);
  }

  private smartConcat(current: string, input: string): string {
    if (current.length === 0) {
      return input;
    } else {
      return current.concat(this.separator).concat(input);
    }
  }

  private setImage(url: string) {
    if (url) {
      this.upsertMeta('og:image', url);
    }
  }

  upsertMeta(name: string, value: string) {
    if (name && value) {
      const tag = SeoService.getTag(name);
      if (this.meta.getTag(tag) != null) {
        this.meta.updateTag({property: name, content: value});
      } else {
        this.meta.addTag({property: name, content: value});
      }
    }
  }



  private resetTitle() {
    this.titleService.setTitle(this.title);
    this.resetMeta('og:title');

  }

  reset() {
    this.resetTitle();
    this.resetMeta('description');
    this.resetMeta('og:image');
  }

  private resetMeta(name: string) {
    const tag = SeoService.getTag(name);
    if (this.metaDefault[name]) {
      this.meta.updateTag({property: name, content: this.metaDefault[name]});
    } else {
      this.meta.removeTag(tag);
    }
  }



}
